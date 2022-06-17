import { useContext, useEffect, useState, useRef } from 'react';
import { sortProducts } from '../../Actions/products';
import FrontContext from '../../Contexts/FrontContext';

function Bar() {
    const [select, setSelect] = useState('default_sort');

    const { dp, min, max } = useContext(FrontContext);

    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(0);

    const run = useRef(true);

    useEffect(() => {
        if (run.current) {
            run.current = false;
            return;
        }
        console.log(select);
        dp(sortProducts(select));
    }, [select, dp]);

    return (
        <div className="bar">
            <div className="sort">
                <span>Rūšiuoti pagal:</span>
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value="default_sort">Numatytasis</option>
                    <option value="price_asc_sort">Kaina nuo mažiausios</option>
                    <option value="price_desc_sort">
                        Kaina nuo didžiausios
                    </option>
                    <option value="title_sort">Pagal pavadimą</option>
                </select>
            </div>
            <div className="sort">
                <span>Filtruoti pagal:</span>
                <div>
                    <div className="range">
                        <i>min:({minRange})</i> <b>{min}</b>
                        <input
                            type="range"
                            value={minRange}
                            min={min}
                            onChange={(e) => setMinRange(e.target.value)}
                        />
                    </div>
                    <div className="range">
                        <i>max:({maxRange})</i> <b>{max}</b>
                        <input
                            type="range"
                            value={maxRange}
                            max={max}
                            onChange={(e) => setMaxRange(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar;
