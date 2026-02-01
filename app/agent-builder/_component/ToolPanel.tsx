import React from 'react'
import { Bot, Square, StickyNote, FileSearch, ShieldCheck, Blocks, Split, Repeat, ThumbsUp, Shuffle, Database, Cloud } from 'lucide-react'

interface ToolItem {
    name: string;
    type: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    color: string;
    bgColor: string;
    beta?: boolean;
}

interface ToolCategory {
    category: string;
    tools: ToolItem[];
}

const toolCategories: ToolCategory[] = [
    {
        category: 'Core',
        tools: [
            {
                name: 'Agent',
                type: 'AgentNode',
                icon: Bot,
                description: 'AI model to process data',
                color: 'text-green-500',
                bgColor: 'bg-green-500/10'
            },
            {
                name: 'End',
                type: 'EndNode',
                icon: Square,
                description: 'Terminate the workflow',
                color: 'text-red-500',
                bgColor: 'bg-red-500/10'
            },
            {
                name: 'Note',
                type: 'NoteNode',
                icon: StickyNote,
                description: 'Add comments or documentation',
                color: 'text-amber-500',
                bgColor: 'bg-amber-500/10'
            }
        ]
    },
    {
        category: 'Tools',
        tools: [
            {
                name: 'File Search',
                type: 'FileSearchNode',
                icon: FileSearch,
                description: 'Search knowledge base',
                color: 'text-orange-500',
                bgColor: 'bg-orange-500/10'
            },
            {
                name: 'Guardrails',
                type: 'GuardrailsNode',
                icon: ShieldCheck,
                description: 'AI safety constraints',
                color: 'text-rose-500',
                bgColor: 'bg-rose-500/10'
            },
            {
                name: 'MCP',
                type: 'MCPNode',
                icon: Blocks,
                description: 'Model Context Protocol',
                color: 'text-violet-500',
                bgColor: 'bg-violet-500/10',
                beta: true
            },
            {
                name: 'API',
                type: 'ApiNode',
                icon: Cloud,
                description: 'Call external services',
                color: 'text-cyan-500',
                bgColor: 'bg-cyan-500/10'
            }
        ]
    },
    {
        category: 'Logic',
        tools: [
            {
                name: 'If / Else',
                type: 'IfElseNode',
                icon: Split,
                description: 'Conditional branching',
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-500/10'
            },
            {
                name: 'While',
                type: 'WhileNode',
                icon: Repeat,
                description: 'Loop through data',
                color: 'text-blue-500',
                bgColor: 'bg-blue-500/10'
            },
            {
                name: 'User Approval',
                type: 'UserApprovalNode',
                icon: ThumbsUp,
                description: 'Wait for user input',
                color: 'text-purple-500',
                bgColor: 'bg-purple-500/10'
            }
        ]
    },
    {
        category: 'Data',
        tools: [
            {
                name: 'Transform',
                type: 'TransformNode',
                icon: Shuffle,
                description: 'Transform data format',
                color: 'text-pink-500',
                bgColor: 'bg-pink-500/10'
            },
            {
                name: 'Set State',
                type: 'SetStateNode',
                icon: Database,
                description: 'Store variables & state',
                color: 'text-teal-500',
                bgColor: 'bg-teal-500/10'
            }
        ]
    }
]

function ToolPanel() {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className='w-72 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-4 flex flex-col gap-4 overflow-y-auto'>
            <div>
                <h2 className='text-lg font-bold mb-1 flex items-center gap-2'>Agent Tools</h2>
                <p className='text-sm text-gray-500 mb-4'>Drag and drop nodes to the canvas</p>
            </div>

            {toolCategories.map((category, catIndex) => (
                <div key={catIndex} className='flex flex-col gap-2'>
                    <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>{category.category}</h3>
                    <div className='flex flex-col gap-2'>
                        {category.tools.map((tool, index) => (
                            <div
                                key={index}
                                className='group flex items-center gap-3 p-3 border border-gray-100 dark:border-gray-900 rounded-xl cursor-grab active:cursor-grabbing hover:border-primary/50 hover:shadow-sm transition-all bg-gray-50/50 dark:bg-gray-900/30'
                                onDragStart={(event) => onDragStart(event, tool.type)}
                                draggable
                            >
                                <div className={`w-9 h-9 ${tool.bgColor} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <tool.icon className={`h-5 w-5 ${tool.color}`} />
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <div className='flex items-center gap-2'>
                                        <span className='font-semibold text-sm'>{tool.name}</span>
                                        {tool.beta && (
                                            <span className='text-[9px] bg-violet-500/20 text-violet-600 dark:text-violet-400 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider'>Beta</span>
                                        )}
                                    </div>
                                    <p className='text-[10px] text-gray-500 leading-tight'>{tool.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    )
}

export default ToolPanel
