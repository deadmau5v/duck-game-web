import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "./menuBar";
import SearchButton from "./按钮组/搜索";
import LoginButton from "./按钮组/登录";
import NoticeButton from "./按钮组/公告";
import BuyVIP from "./按钮组/买VIP";
import { Home, Gamepad2, CircleUser } from "lucide-react";
import styled from "styled-components";

const MenubarContentStyled = styled(MenubarContent)`
    background-color: #fff;
    @media (max-width: 768px) {
        width: 100vw;
        left: 0 !important;
    }
`

const MenubarSubContentStyled = styled(MenubarSubContent)`
    background-color: #fff;
    @media (max-width: 768px) {
        width: 100vw;
        left: 0 !important;
    }
`

const StyledMenubar = styled(Menubar)`
    height: 3.5rem;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
        padding: 0 0.5rem;
        justify-content: space-between;
        
        .mobile-hide {
            display: none;
        }
        
        .tools-container {
            margin-left: 0;
            gap: 0.5rem;
        }
    }
`

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

const ToolsContainer = styled.div`
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`

export default function HeaderBar() {
    const gameTypes: string[] = [
        "动作冒险",
        "角色扮演",
        "策略战棋",
        "模拟经营",
        "休闲益智",
        "枪战射击",
        "恐怖惊悚",
        "体育竞技",
        "即时战略"
    ]

    return (
        <StyledMenubar>
            {/* 标题 */}
            <MenubarMenu>
                <Title onClick={() => window.location.href = '/'}>
                    DuckGame
                </Title>
            </MenubarMenu>

            {/* 首页 */}
            <MenubarMenu>
                <MenubarTrigger className="mobile-hide" onClick={() => window.location.href = '/'}>
                    <Home size={16} />
                    主页
                </MenubarTrigger>
            </MenubarMenu>

            {/* 游戏类型 */}
            <MenubarMenu>
                <MenubarTrigger className="mobile-hide">
                    <Gamepad2 size={16} />
                    <span className="mobile-hide">全部游戏</span>
                </MenubarTrigger>
                <MenubarContentStyled>
                    {gameTypes.map((gameType, index) => (
                        <MenubarItem key={index}>
                            {gameType}
                        </MenubarItem>
                    ))}
                </MenubarContentStyled>
            </MenubarMenu>

            {/* 个人中心 */}
            <MenubarMenu>
                <MenubarTrigger className="mobile-hide">
                    <CircleUser size={16} />
                    <span className="mobile-hide">个人中心</span>
                </MenubarTrigger>
                <MenubarContentStyled>
                    <MenubarSub>
                        <MenubarSubTrigger>社区中心</MenubarSubTrigger>
                        <MenubarSubContentStyled>
                            <MenubarSeparator />
                            <MenubarItem>问答</MenubarItem>
                            <MenubarItem>安装</MenubarItem>
                            <MenubarItem>吐槽</MenubarItem>
                            <MenubarItem>汉化</MenubarItem>
                        </MenubarSubContentStyled>
                    </MenubarSub>
                    <MenubarItem>更新历史</MenubarItem>
                    <MenubarItem>热门标签</MenubarItem>
                </MenubarContentStyled>
            </MenubarMenu>

            {/* 工具栏 */}
            <ToolsContainer style={{
                marginLeft: "auto",
                gap: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <BuyVIP className="mobile-hide" />
                <NoticeButton />
                <SearchButton />
                <LoginButton />
            </ToolsContainer>
        </StyledMenubar>
    );
}