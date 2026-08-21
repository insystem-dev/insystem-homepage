"use client";

import { useEffect } from "react";

/**
 * 스크롤 진입 시 `.scroll-animate` 를 붙여 등장 애니메이션을 실행한다.
 * globals.css 의 초기 상태 클래스와 짝을 이룬다.
 *
 *  - `.section-title`       : 즉시 slideUpIn
 *  - `.section-description` : 0.1s 지연
 *  - `.project-item`        : nth-child 기준 0.1s~0.5s 순차 등장
 *  - `.project-button`      : 0.6s 지연
 *
 * 관찰 대상에 직접 transform 이 걸리면 threshold 경계에서 intersection 상태가
 * 계속 뒤집히므로, 타이틀류는 움직이지 않는 부모를 관찰하고 transform 은 그
 * 안의 요소에만 적용한다. 진입 시 1회만 실행하고 바로 unobserve 하며,
 * 화면에서 벗어나도 되돌리지 않는다.
 */
export function useScrollReveal() {
  useEffect(() => {
    // 관찰 대상(key) -> class 를 붙일 실제 애니메이션 대상(value)
    const targets = new Map<Element, Element[]>();

    const register = (observed: Element, animated: Element) => {
      const list = targets.get(observed);
      if (list) list.push(animated);
      else targets.set(observed, [animated]);
    };

    document
      .querySelectorAll(".section-title, .section-description")
      .forEach((el) => register(el.parentElement ?? el, el));

    // 개별 순차 등장이 필요한 요소는 자기 자신을 관찰 (one-shot 이라 loop 없음)
    document
      .querySelectorAll(".project-item, .project-button")
      .forEach((el) => register(el, el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          targets
            .get(entry.target)
            ?.forEach((el) => el.classList.add("scroll-animate"));

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((_animated, observed) => observer.observe(observed));
    return () => observer.disconnect();
  }, []);
}
