import { useMemo, useState } from "react";

export const Calculator = ({ a, b }) => {

    const [c, setC] = useState(0);

    const slowSum = (a, b) => {
        const n = [...Array(10000000).keys()].reduce((p, c) => p + c);
        return a + b;
    }

    const slowSumMemo = useMemo(()=>{
        return slowSum(a,b)
    }, [a,b]);

    return (
        <>
            <div>
                {slowSumMemo}
            </div>
            <hr/>
            <input type="number" value={c} onChange={(e)=>setC(parseInt(e.target.value))}/>
        </>
    )
}