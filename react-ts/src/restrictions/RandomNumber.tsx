import { FC } from 'react';

type RandomNumberType = { value: number };

type PosetiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = PosetiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber: FC<RandomNumberProps> = ({
  value,
  isPositive,
  isNegative,
  isZero,
}) => {
  return (
    <div>
      {value} is {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  );
};

export default RandomNumber;
