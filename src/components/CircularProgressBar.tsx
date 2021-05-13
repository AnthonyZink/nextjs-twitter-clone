import classNames from "classnames";

const CircularProgressBar = ({
    value = "50",
    max = "100",
    sqSize = "100",
    strokeWidth = "5",
}) => {
    let percentage = (parseInt(value) * 100) / parseInt(max);

    if (percentage > 100) percentage = 100;

    const radius = (parseInt(sqSize) - parseInt(strokeWidth)) / 2;
    const viewBox = `0 0 ${parseInt(sqSize)} ${parseInt(sqSize)}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    const colors = (stroke = false, fill = false) =>
        classNames({
            "stroke-current": stroke,
            "fill-current text-xs":
                fill && parseInt(max) - parseInt(value) <= 20,
            "text-blue-400": parseInt(max) - parseInt(value) > 20,
            "text-yellow-500":
                parseInt(max) - parseInt(value) < 20 &&
                parseInt(max) - parseInt(value) > 0,
            "text-red-500": parseInt(max) - parseInt(value) <= 0,
        });

    return (
        <svg
            width={parseInt(sqSize)}
            height={parseInt(sqSize)}
            viewBox={viewBox}
        >
            {parseInt(value) < parseInt(max) + 10 && (
                <circle
                    className="stroke-current text-gray-700"
                    cx={parseInt(sqSize) / 2}
                    cy={parseInt(sqSize) / 2}
                    r={radius}
                    strokeWidth={`${parseInt(strokeWidth)}px`}
                    fill="none"
                />
            )}
            {parseInt(value) < parseInt(max) + 10 && (
                <circle
                    className={colors(true)}
                    cx={parseInt(sqSize) / 2}
                    cy={parseInt(sqSize) / 2}
                    r={radius}
                    fill="none"
                    strokeWidth={`${strokeWidth}px`}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${parseInt(sqSize) / 2} ${
                        parseInt(sqSize) / 2
                    })`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}
                />
            )}
            <text
                className={colors(false, true)}
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
            >
                {`${parseInt(max) - parseInt(value)}`}
            </text>
        </svg>
    );
};

export default CircularProgressBar;
