interface BarProgressBalanceProps {
    total: number;
    now: number;
    future: number;
    limit: number;
}

export const BarProgressBalance = ({
    future,
    now,
    total,
    limit
}: BarProgressBalanceProps) => {

    function calcPercentage(value: number, total: number) {
        const percentage = ((value / total) * 100);
        return parseInt(`${percentage}`);
    }

    const yFuture = calcPercentage(future, limit);
    const zNow =  calcPercentage(now, limit);
    const xLimit = calcPercentage(total, limit); 

    return (
        <div style={{
            maxWidth:`${limit}%`
        }} className={`flex mt-4 rounded-md overflow-hidden bg-slate-100`}>
            <div
                style={{
                    width: `${xLimit}%`
                }} className={`bg-green-400 h-2`} />
            <div
                style={{
                    width: `${zNow}%`
                }}
                className={`bg-blue-400 h-2`} />
            <div
                style={{
                    width: `${yFuture}%`
                }}
                className={`bg-orange-400 h-2`} />
        </div>
    );
}
