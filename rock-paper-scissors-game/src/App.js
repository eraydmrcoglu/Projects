import './index.scss';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Rules from './components/Rules/Rules';
import Result from './components/Result/Result';
import Play from './components/Play/Play';
import { useState, useRef } from 'react';

function App() {
  const getLocal = JSON.parse(localStorage.getItem('Result'))
  const [result, setResult] = useState(() => {
    return getLocal ? getLocal : 0
  });
  const [play, setPlay] = useState(false);
  const [winner, setWinner] = useState([])
  const [rules, setRules] = useState(false)
  let textResult = useRef();
  localStorage.setItem('Result', result);

// Kurallar
  const handleRules = () => {
    setRules(!rules);
    
  }  
  const typeButton = [{
    name: "Kağıt",
    cls: "btn__paper",
  },
  {
      name: "Makas",
      cls: "btn__scissors"
  }
  ,{
      name: "Taş",
      cls: "btn__rock"
    }];
  
  const handleClick = (index) => {
    setPlay(true);
    const random = Math.floor(Math.random() * typeButton.length)
    const YouPicked = typeButton[index].name;
    const HousePicked = typeButton[random].name;
 
  
    if (YouPicked === "Taş") {
      if (HousePicked === "Makas") {
        textResult.current = "Sen Kazandın!";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
          }
      else if (HousePicked === "Kağıt") {
        textResult.current = "Kaybettin!";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else {
        textResult.current = "Berabere";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    } else if (YouPicked === "Kağıt")
    {
      if (HousePicked === "Makas") {
        textResult.current = "Kaybettin!";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else if (HousePicked === "Taş") {
        textResult.current = "Kazandın!";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
      else {
        textResult.current = "Berabere";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    } else {
      if (HousePicked === "Kağıt") {
        textResult.current = "Kazandın!";
        setResult(result + 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: true,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
      else if (HousePicked === "Taş") {
        textResult.current = "Kaybettin!";
        setResult(result - 1)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: true,
          }
        ])
      }
      else {
        textResult.current = "Berabere";
        setResult(result)
        setWinner([
          {
            id: index,
            name: typeButton[index].cls,
            result: true,
            iswin: false,
          },
          {
            id: random,
            name: typeButton[random].cls,
            result: true,
            iswin: false,
          }
        ])
      }
    }
  } 

  // Click Play Again
  const handlePlayAgain = () => {
      setPlay(!play);
    }
  return (
    <div className="container">
      <Header result={result} />
      <main>
        {
          !play && <Play>
                    {
                      typeButton.map((item, index) => {
                        return <Button
                          onBtnClick={() => handleClick(index)}
                          key={index} type={item.cls} />
                      })
                    }
                  </Play>
        }
        {
          play && <Result
                  text={textResult.current}
            clickPlayAgain={handlePlayAgain}>
            {
              winner && winner.map((item, index) => {
                return <Button
                  key={index}
                  type={item.name}
                  result={item.result}
                  isWin={item.iswin}
                      />
              })
            }
                  </Result>
        }
      </main> 
      <footer>
        <Rules isPlay={play} clickRules={handleRules} rules={ rules }/>
      </footer>
    </div>
  );
}

export default App;
