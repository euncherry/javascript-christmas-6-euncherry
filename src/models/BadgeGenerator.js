import { BADGE_INFO } from '../util/constant/index.js';

class BadgeGenerator {
  #badge;

  constructor(totalBenefitsAmount) {
    this.#badge = this.calculateBadge(totalBenefitsAmount);
  }

  /**
   *혜택 금액에 따라 이벤트 배지를 계산
   * @param {Number} totalBenefitsAmount - 총혜택 금액
   * @returns {string | null} - 배지의 이름 또는 null
   */
  calculateBadge(totalBenefitsAmount) {
    //배지가 추가되도 그대로 사용할 수 있도록 정렬 후 계산
    const sortedBadges = [...BADGE_INFO].sort((a, b) => b.price - a.price);

    const selectedBadge = sortedBadges.find(({ price }) => totalBenefitsAmount >= price);

    return selectedBadge?.name || null;
  }

  getBadge() {
    return this.#badge;
  }
}

export default BadgeGenerator;
