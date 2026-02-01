"use client";
import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { ShieldCheck } from 'lucide-react'

interface GuardrailsNodeProps {
    selected?: boolean;
}

function GuardrailsNode({ selected }: GuardrailsNodeProps) {
    return (
        <div className={`flex items-center gap-3 bg-white dark:bg-gray-900 border-2 rounded-xl p-4 shadow-sm min-w-[150px] relative transition-all hover:shadow-md ${selected ? 'border-rose-500 shadow-rose-500/20' : 'border-rose-500'}`}>
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 !bg-rose-500 border-2 border-white dark:border-gray-900"
            />
            <div className='w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-500'>
                <ShieldCheck className='h-6 w-6' />
            </div>
            <div>
                <p className='text-xs text-gray-500 font-medium uppercase tracking-wider'>Tool</p>
                <h2 className='text-lg font-bold'>Guardrails</h2>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 !bg-rose-500 border-2 border-white dark:border-gray-900"
            />
        </div>
    )
}
export default GuardrailsNode
