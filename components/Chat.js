import { useState, useRef, useEffect } from 'react'
import { PAIRS } from '../data'
import { findBest, getAnswer } from '../lib/match'

export default function Chat() {
  const [gender, setGender]     = useState(null)   // 'm' | 'f' | null
  const [messages, setMessages] = useState([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [started, setStarted]   = useState(false)
  const bottomRef               = useRef(null)
  const inputRef                = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (gender) setTimeout(() => inputRef.current?.focus(), 100)
  }, [gender])

  const send = (text) => {
    const q = (text ?? input).trim()
    if (!q || loading) return

    setInput('')
    setStarted(true)
    setMessages(prev => [...prev, { role: 'user', content: q }])
    setLoading(true)

    setTimeout(() => {
      const { match, candidates } = findBest(q, PAIRS)
      if (match) {
        setMessages(prev => [...prev, {
          role: 'bot',
          content: getAnswer(match, gender),
          topic: match.topic,
        }])
      } else {
        setMessages(prev => [...prev, { role: 'bot', content: null, candidates }])
      }
      setLoading(false)

      /*
       * ── FUTURE MODEL SWAP ──────────────────────────────────
       * Replace the block above with this when model is ready.
       * Gender is passed so the model applies correct agreement.
       *
       * const res = await fetch('/api/chat', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({
       *     messages: [...messages, { role: 'user', content: q }],
       *     gender,
       *   }),
       * })
       * const data = await res.json()
       * setMessages(prev => [...prev, { role: 'bot', content: data.reply }])
       * setLoading(false)
       * ──────────────────────────────────────────────────────
       */
    }, 600)
  }

  const onInput = (e) => {
    setInput(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (input.trim()) send() }
  }

  return (
    <div className="chat-wrap">
      <div className="chat-card">

        <div className="chat-header">
          <div className="chat-avatar">ት</div>
          <div>
            <div className="chat-name">ትግሜድ</div>
            <div className="chat-status">
              <span className="live-dot"/>
              {gender ? 'ብትግርኛ ሕቶ ሕክምናኻ ሕተት' : 'ሰላም — ቅድሚ ምጅማር ምረጽ'}
            </div>
          </div>
        </div>

        <div className="messages">

          {!gender && <GenderSelect onSelect={setGender}/>}

          {gender && !started && (
            <div className="empty">
              <div className="empty-icon">⚕</div>
              <div className="empty-title">
                {gender === 'm' ? 'ሰላም! ትግሜድ ምስኻ ኣሎ።' : 'ሰላም! ትግሜድ ምስኺ ኣሎ።'}
              </div>
              <div className="empty-sub">
                {gender === 'm' ? 'ሕቶ ሕክምናኻ ብትግርኛ ሕተት።' : 'ሕቶ ሕክምናኺ ብትግርኛ ሕተቲ።'}<br/>
                ካብዞም ሕቶታት ምረጽ ወይ ናትካ ጸሓፍ።
              </div>
              <div className="suggestions">
                {PAIRS.map((p, i) => (
                  <button key={i} className="suggestion" onClick={() => send(p.q)}>{p.q}</button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`bubble-row ${m.role}`}>
              {m.role === 'bot' && m.content === null
                ? <NoMatch candidates={m.candidates} onSelect={send} gender={gender}/>
                : <div className={`bubble ${m.role}`}>{m.content}</div>
              }
            </div>
          ))}

          {loading && (
            <div className="bubble-row bot">
              <div className="bubble bot">
                <div className="typing">
                  <div className="typing-dot"/><div className="typing-dot"/><div className="typing-dot"/>
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef}/>
        </div>

        {gender && (
          <div className="input-bar">
            <textarea
              ref={inputRef}
              className="chat-input"
              rows={1}
              placeholder={gender === 'm' ? 'ሕቶ ሕክምናኻ ብትግርኛ ጸሓፍ…' : 'ሕቶ ሕክምናኺ ብትግርኛ ጸሓፊ…'}
              value={input}
              onChange={onInput}
              onKeyDown={onKeyDown}
            />
            <button className="send-btn" onClick={() => send()} disabled={!input.trim() || loading}>
              <SendIcon/>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

function GenderSelect({ onSelect }) {
  return (
    <div className="gender-select">
      <div className="gender-title">ሰላም! ትግሜድ ን<em>ጥዕናኻ</em> ምስኻ ኣሎ።</div>
      <div className="gender-sub">ብኽብረትካ ምረጽ</div>
      <div className="gender-btns">
        <button className="gender-btn" onClick={() => onSelect('m')}>
          <span className="gender-btn-label">ተባዕታይ</span>
        </button>
        <button className="gender-btn" onClick={() => onSelect('f')}>
          <span className="gender-btn-label">ኣንስታይ</span>
        </button>
      </div>
    </div>
  )
}

function NoMatch({ candidates, onSelect, gender }) {
  const msg = gender === 'f'
    ? 'ብዛዕባ እዚ ሕቶ ሓበሬታ ኣይረኸብኩን። ሕቶኺ ብካልእ ቃላት ፈትኒ፡ ወይ ምስ ሰራሕተኛ ጥዕና ተወከሲ። ⚕'
    : 'ብዛዕባ እዚ ሕቶ ሓበሬታ ኣይረኸብኩን። ሕቶኻ ብካልእ ቃላት ፈትን፡ ወይ ምስ ሰራሕተኛ ጥዕና ተወከስ። ⚕'
  return (
    <div className="no-match">
      {msg}
      {candidates.length > 0 && (
        <div className="did-you-mean">
          <div className="did-you-mean-label">ከምዚ ኢልካ ትሓትት ዲኻ?</div>
          <div className="suggestions">
            {candidates.map((c, i) => (
              <button key={i} className="suggestion" onClick={() => onSelect(c.q)}>{c.q}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
}
