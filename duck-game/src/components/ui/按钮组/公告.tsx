import { Bell } from "lucide-react";
import { Button } from "../button";

export default function NoticeButton() {
    return <>
        <Button title="通知" style={{
            padding: 0,
            margin: 0,
        }}><Bell /></Button>
    </>
}