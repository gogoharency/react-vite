import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

interface ffType {
	name: string,
	value?: boolean
}

function App() {
  const [count, setCount] = useState(0)
  const [ff, setFF] = useState<ffType>({ name: '1111', value: true })
	const [data, setData] = useState({});
  const [hh, setHH] = useState(() =>{
		return [{ a: 1 }, { a: 2 }]
	})
	const [list, setList] = useState([
		{ id: 1, name: 'A' },
		{ id: 2, name: 'B' },
	]);
	const [total, setTotal] = useState(0)
  const st = {
    color: 'red',
  }

	// 新增
const addItem = () => {
  setList(prev => [
    ...prev,
    { id: Date.now(), name: 'New' }
  ]);
};

// 修改
const updateItem = (id) => {
  setList(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, name: 'Updated' }
        : item
    )
  );
};

// 删除
const removeItem = (id) => {
  setList(prev =>
    prev.filter(item => item.id !== id)
  );
};

  const handle = () => {

    setFF({ ...ff, value: false })

		// 都抛错， 因为value是必须值,需要添加ts非必存校验
    // setFF(prev => {
		// 	const {value, ...rest} = prev
		// 	return rest
		// })
		setFF(({ value, ...rest }) => rest);


		//
		setData(prev => ({
			...prev,
			name: 'Tom',
			age: 18
		}));
		setData(prev => {
			const { age, ...rest } = prev;
			return rest;
		});
  }

  const handle02 = () => {
		setCount(pre => {
			console.log(pre)
			return pre + 1
		})
    // 主动触发更新
    // flushSync(() => {})
		console.log(22222)
    setHH(prev => {
			console.log(prev)
    	return [...prev, {a: 3}]
    })
		console.log(hh)
  }

	// useEffect(() => {
	// 	setTotal(count * 2)
	// }, [count])

  // useEffect(() => {
	// 	const T = setInterval(() => {
	// 		setCount(pre => pre + 1)
	// 	}, 2000)
	// 	return () => {
	// 		clearInterval(T)
	// 	}
  // }, [])
  return (
    <>
      {ff.value ? <div style={st}>321</div> : <>44444</>}
      {hh.map((v, index) => (
        <div key={index}>{v.a}</div>
      ))}
			{ <div>{count}:{total}</div> }
      <section id="center">
        <div className="hero" onClick={handle}>
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 onClick={handle02}>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
