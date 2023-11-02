import { GoalDiff as GoalDiffType } from "@/models";

export const GoalDiff: React.FC<{ goalDiff: GoalDiffType }> = ({
  goalDiff,
}) => {
  const goalDiffImage = {
    diff1: "/images/goalDiff/1.svg",
    diff2: "/images/goalDiff/2.svg",
    diff3: "/images/goalDiff/3.svg",
    diff4: "/images/goalDiff/4.svg",
    diff5: "/images/goalDiff/5.svg",
    diff6: "/images/goalDiff/6.svg",
    diff7: "/images/goalDiff/7.svg",
    diff8: "/images/goalDiff/8.svg",
    diff9: "/images/goalDiff/9.svg",
    diff10: "/images/goalDiff/10.svg",
    diff1_2: "/images/goalDiff/1-2.svg",
    diff1_1_2: "/images/goalDiff/1.1-2.svg",
    diff1_1_4: "/images/goalDiff/1.1-4.svg",
    diff1_3_4: "/images/goalDiff/1.3-4.svg",
    diff2_1_2: "/images/goalDiff/2.1-2.svg",
    diff3_4: "/images/goalDiff/3-4.svg",
    diff3_1_2: "/images/goalDiff/3.1-2.svg",
    big: "/images/goalDiff/big.svg",
    head: "/images/goalDiff/head.svg",
    none: "/images/goalDiff/none.svg",
    nose: "/images/goalDiff/nose.svg",
    neck: "/images/goalDiff/neck.svg",
    photo: "/images/goalDiff/photo.svg",
    same: "/images/goalDiff/same.svg",
  };
  return (
    <div className="flex items-center w-full justify-around">
      <p
        className={`text-horse ${
          goalDiff === GoalDiffType.same ? "text-led" : "text-zinc-800"
        }`}
        data-testid="goalDiff"
      >
        &#62;
      </p>
      <img
        src={goalDiffImage[goalDiff]}
        alt="goalNumber"
        className="h-10 w-auto"
      />
    </div>
  );
};
