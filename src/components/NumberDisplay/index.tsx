import style from './styles.module.scss'

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const digitRegexp = /\d/;

interface Props {
    numberString: string;
}

const NumberDisplay = (props: Props) => {
    const { numberString } = props
    return (
        <div className={style.numberDisplay}>
            {numberString.split('').map((digitStr, index) => (
                <div className={style.digitWraper}>
                    {
                        digitRegexp.test(digitStr) ? (
                            //show digit
                            <span className={style.digitList} style={{
                                transform: `translate(-50%,${-Number(digitStr) * 32}px)`,
                                transitionDelay: `${index * 10}ms`
                            }}>
                                {
                                    digits.map(digit => (
                                        <span key={digit} className={style.digit}>{digit}</span>
                                    ))
                                }
                            </span>
                        ) : (
                            //show symbol
                            <span>
                                {digitStr}
                            </span>
                        )
                    }
                </div>
            ))
            }
        </div >
    )
}

export default NumberDisplay