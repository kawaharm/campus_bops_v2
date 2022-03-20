import React from 'react';
import "../bracket.css";

function CategoryBracket() {
    return (
        <div className="tournament-container">
            <div className="tournament-headers">
                <h3>Preliminary</h3>
                <h3>Quarter-Finals</h3>
                <h3>Semi-Finals</h3>
                <h3>Final</h3>
                <h3>Winner</h3>
            </div>

            <div className="tournament-brackets">
                <ul className="bracket bracket-1">
                    <li className="team-item">
                        Hello <time>14:00</time> C2
                    </li>
                    <li className="team-item">D1 <time>20:00</time> 3BEF</li>
                    <li className="team-item">B1 <time>17:00</time> 3ACD</li>
                    <li className="team-item">F1 <time>20:00</time> E2</li>
                    <li className="team-item">C1 <time>17:00</time> 3ABF</li>
                    <li className="team-item">E1 <time>17:00</time> D2</li>
                    <li className="team-item">A1 <time>14:00</time> 3CDE</li>
                    <li className="team-item">B2 <time>20:00</time> F2</li>
                </ul>
                <ul className="bracket bracket-2">
                    <li className="team-item">QF1 <time>20:00</time> QF2</li>
                    <li className="team-item">QF3 <time>20:00</time> QF4</li>
                    <li className="team-item">QF5 <time>20:00</time> QF6</li>
                    <li className="team-item">QF7 <time>20:00</time> QF8</li>
                </ul>
                <ul className="bracket bracket-3">
                    <li className="team-item">SF1 <time>20:00</time> SF2</li>
                    <li className="team-item">SF3 <time>20:00</time> SF4</li>
                </ul>
                <ul className="bracket bracket-4">
                    <li className="team-item">F1 <time>20:00</time> F2</li>
                </ul>

                <ul className="bracket bracket-5">
                    <li className="team-item">European Champions</li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryBracket;