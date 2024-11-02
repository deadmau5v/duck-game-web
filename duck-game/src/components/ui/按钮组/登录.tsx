import { LogIn } from "lucide-react";
import { Button } from "../button";

export default function LoginButton() {
    return <>
        <Button style={{
            margin: 0,
            padding: 0,
        }}>
            <LogIn />
            登录
        </Button>
    </>
}