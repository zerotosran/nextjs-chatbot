'use client'

import * as React from 'react'
import Textarea from 'react-textarea-autosize'
import { useActions, useUIState } from 'ai/rsc'
import { UserMessage } from './stocks/message'
import { type AI } from '@/lib/chat/actions'
import { Button } from '@/components/ui/button'
import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

export function PromptForm({
  input,
  setInput
}: {
  input: string
  setInput: (value: string) => void
}) {
  const router = useRouter()
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState<typeof AI>()
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setInput(`Uploaded file: ${file.name}`)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault()
        if (window.innerWidth < 600) {
          e.target['message']?.blur()
        }
        const value = input.trim()
        setInput('')
        if (!value && !selectedFile) return
        
        // Optimistically add user message UI
        setMessages(currentMessages => [
          ...currentMessages,
          {
            id: nanoid(),
            display: <UserMessage>{value || `Uploaded: ${selectedFile?.name}`}</UserMessage>
          }
        ])
        
        // Here you would typically upload the file and get a URL or process it
        // For this example, we'll just pass the file name
        const fileInfo = selectedFile ? { name: selectedFile.name, size: selectedFile.size } : null
        
        // Submit and get response message
        const responseMessage = await submitUserMessage(value, fileInfo)
        setMessages(currentMessages => [...currentMessages, responseMessage])
        
        // Reset the selected file
        setSelectedFile(null)
      }}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-[14px] size-8 rounded-full bg-background p-0 sm:left-4"
              onClick={() => fileInputRef.current?.click()}
            >
              <IconPlus />
              <span className="sr-only">Upload File</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Upload File</TooltipContent>
        </Tooltip>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          placeholder="Send a message."
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          name="message"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <div className="absolute right-0 top-[13px] sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="submit" size="icon" disabled={input === '' && !selectedFile}>
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
