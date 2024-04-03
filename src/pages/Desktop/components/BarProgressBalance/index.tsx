export const BarProgressBalance = () => {
    const total = 3968.32;
    const now = 416.70;
    const future = 264.98;

    function calcPercentage(value: number, total: number) {
        const percentage = ((value / total) * 100);
        return parseInt(`${percentage}`);
    }

    const y = calcPercentage(now, total);
    const z = calcPercentage(future, total);
    const x = 100 - y - z;

    console.log(y);
    console.log(z);
    console.log(x);

    return (
        <div className={`flex mt-4 rounded-md overflow-hidden`}>
            <div
                style={{
                    width: `${x}%`
                }} className={` bg-green-400 h-2`} />
            <div
                style={{
                    width: `${z}%`
                }}
                className={` bg-blue-400 h-2`} />
            <div
                style={{
                    width: `${y}%`
                }}
                className={` bg-orange-400 h-2`} />
        </div>
    );
}
