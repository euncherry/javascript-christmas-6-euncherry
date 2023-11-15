import BadgeGenerator from '../src/models/BadgeGenerator.js';

describe('BadgeGenerator 테스트', () => {
  test('총혜택 금액이 각 배지의 기준보다 낮을 때 null을 반환하는지 확인', () => {
    // given
    const totalBenefitsAmount = 4000; // 총혜택 금액이 가장 낮은 배지의 기준보다 낮음
    const badgeGenerator = new BadgeGenerator(totalBenefitsAmount);

    // when
    const badge = badgeGenerator.getBadge();

    // then
    expect(badge).toBeNull();
  });

  test.each`
    totalBenefitsAmount | expectedBadge
    ${0}                | ${null}
    ${3000}             | ${null}
    ${5000}             | ${'별'}
    ${6000}             | ${'별'}
    ${10000}            | ${'트리'}
    ${12000}            | ${'트리'}
    ${20000}            | ${'산타'}
    ${25000}            | ${'산타'}
  `(
    '총혜택 금액에 따라 올바른 배지를 반환하는지 확인',
    ({ totalBenefitsAmount, expectedBadge }) => {
      // given
      const badgeGenerator = new BadgeGenerator(totalBenefitsAmount);

      // when
      const badge = badgeGenerator.getBadge();

      // then
      expect(badge).toBe(expectedBadge);
    },
  );
});
