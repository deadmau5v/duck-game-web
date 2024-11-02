import './App.css'
import AboutTags from './components/ui/关于本站标签'
import HeaderBar from './components/ui/导航栏'
import News from './components/ui/滚动新闻'
import Notice from './components/ui/公告'
import Search from './pages/search'
import GameRecommendations from './components/ui/游戏推荐'
import bg from "@/assets/bg.jpg";
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      {/* 标题栏 */}
      <HeaderBar />
      <div className='bg-blue-50'>
        {/* 搜索栏 */}
        <Search />

        {/* 关于本站的标签 */}
        <div className='bg-white px-[10rem]'>
          <AboutTags />
        </div>

        {/* 控制最大宽度容器 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem',
        }}>
          {/* 公告 */}
          <Notice style={{ marginTop: '1rem', width: "100%" }}>
            本网站为个人学习项目，仅供学习交流使用，不得用于商业用途，如有侵权请联系站长删除。
          </Notice>
          {/* 滚动新闻 */}
          <News style={{ marginTop: '1rem', width: "100%" }} />
          {/* 游戏推荐 */}
          <GameRecommendations style={{ marginTop: "1rem", width: "100%" }} />
        </div>

        {/* 介绍 加群 */}
        <div style={{
          width: '100%',
          height: '10rem',
          backgroundImage: `url(${bg})`,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <span style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'white',
            textShadow: '0 0 10px black',
          }}>兴趣使然的游戏小站</span>
          <div className='py-2'>
            <Button className='bg-blue-100 rounded-xl border-2 border-blue-900 mr-1 hover:bg-blue-200'>联系站长</Button>
            <Button className='bg-blue-100 rounded-xl border-2 border-blue-900 ml-1 hover:bg-blue-200'>加入群聊</Button>
          </div>
        </div>

          {/* 游戏展示 */}
        <div style={{
          height: '100rem',
        }} className='px-40'>
        </div>
        
      </div>
    </>
  )
}

export default App
