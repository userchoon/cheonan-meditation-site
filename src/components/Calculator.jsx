import React, { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;
    let res = 0;
    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : '∞';
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        간단한 계산기
      </h2>
      <div className="max-w-md mx-auto grid gap-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="숫자를 입력하세요"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="숫자를 입력하세요"
        />
        <div className="flex justify-between">
          {['+', '-', '*', '/'].map((op) => (
            <button
              key={op}
              onClick={() => calculate(op)}
              className="flex-1 mx-1 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg"
            >
              {op}
            </button>
          ))}
        </div>
        {result !== null && (
          <p className="text-center text-xl font-semibold text-gray-700">
            결과: {result}
          </p>
        )}
      </div>
    </section>
  );
}
