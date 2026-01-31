"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyAgents from '../_components/MyAgents'
import { useEffect, useState } from 'react'

function AiAgentsPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div id="ai-agents" className='px-10 md:px-24 lg:px-32 mt-10 scroll-mt-24'>
            <Tabs defaultValue="myagent" className="w-full">
                <TabsList>
                    <TabsTrigger value="myagent">My Agents</TabsTrigger>

                </TabsList>
                <TabsContent value="myagent"><MyAgents /></TabsContent>

            </Tabs>
        </div>
    )
}

export default AiAgentsPage
