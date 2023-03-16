import { dedent } from 'ts-dedent';
export const kotlin = dedent`
class Calculator {
  num num1;
  num num2;
  
  Calculator(this.num1, this.num2);
  
  num add() {
    return num1 + num2;
  }
  
  num subtract() {
    return num1 - num2;
  }
  
  num multiply() {
    return num1 * num2;
  }
  
  num divide() {
    return num1 / num2;
  }
}

void main() {
  Calculator calc = Calculator(10, 5);
  
  print('Addition result: \${calc.add()}');
  print('Subtraction result: \${calc.subtract()}');
  print('Multiplication result: \${calc.multiply()}');
  print('Division result: \${calc.divide()}');
}
`;
