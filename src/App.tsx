import { useState } from "react";

type operationsType = "plus" | "minus" | "mul" | "div";

function App() {
    const [num1, setNum1] = useState<number>();
    const [num2, setNum2] = useState<number>();
    const [operation, setOperation] = useState<operationsType>("plus");

    const calculate = () => {
        if (!num1 || !num2) return;
        switch (operation) {
            case "plus":
                return Number(num1) + Number(num2);
            case "minus":
                return num1 - num2;
            case "mul":
                return num1 * num2;
            case "div":
                return num1 / num2;
        }
    };

    return (
        <>
            <div className="calculator">
                <h1>Калькулятор</h1>

                <div className="field">
                    <label htmlFor="num1">Число 1</label>
                    <input
                        type="number"
                        name="num1"
                        value={num1}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setNum1(Number(e.currentTarget.value))
                        }
                        placeholder="Число 1"
                    />
                </div>

                <div className="field">
                    <label htmlFor="num2">Число 2</label>
                    <input
                        type="number"
                        name="num2"
                        value={num2}
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                            setNum2(Number(e.currentTarget.value))
                        }
                        placeholder="Число 2"
                    />
                </div>

                <div className="field">
                    <label htmlFor="operation">Операція</label>
                    <select
                        value={operation}
                        name="operation"
                        onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                            setOperation(
                                e.currentTarget.value as operationsType
                            )
                        }
                    >
                        <option value="plus">+</option>
                        <option value="minus">-</option>
                        <option value="mul">*</option>
                        <option value="div">/</option>
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="result">Результат</label>
                    <input
                        type="number"
                        name="result"
                        value={calculate()}
                        placeholder="Результат"
                    />
                </div>
            </div>
        </>
    );
}

export default App;
