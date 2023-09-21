"use client"
import Section from '@/components/section'
import { OutputData } from "@editorjs/editorjs";
// import type { NextPage } from "next";
import EditorJsRenderer from "@/components/EditorJsRenderer";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorBlock = dynamic(() => import("@/components/editor"), {
    ssr: false,
});

type Props = {}

const Admin = (props: Props) => {
    const [data, setData] = useState<OutputData>();
    return (
        <Section className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 py-12">
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 ">
                    <h1>Editor</h1>
                    <div className="border rounded-xl p-6">
                        <EditorBlock
                            data={data}
                            onChange={setData}
                            holder="editorjs-container"
                        />
                    </div>
                </div>
                <div className="col-span-1 ">
                    <h1>Preview</h1>
                    <div className="border rounded-xl">
                        <div className="p-6">{data && <EditorJsRenderer data={data} />}</div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Admin