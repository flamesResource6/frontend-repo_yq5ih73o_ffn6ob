import React from 'react'

const Bubble = ({ role, text }) => (
  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${role==='user' ? 'ml-auto bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-white/20' : 'bg-white/5 border border-white/10'}`}>{text}</div>
)

export default function Chatbot(){
  const messages = [
    {role:'bot', text:'Hi! I\'m your HLife AI. How can I help with your nutrition today?'},
    {role:'user', text:'Suggest a high-protein lunch under 600 kcal'},
    {role:'bot', text:'Try a grilled chicken quinoa bowl with veggies: 540 kcal, 42g protein.'},
  ]

  return (
    <div className="pt-2 pb-24">
      <div className="text-lg font-semibold mb-3">AI Chat</div>
      <div className="space-y-2">
        {messages.map((m,i)=> <Bubble key={i} role={m.role} text={m.text} />)}
      </div>

      <div className="fixed bottom-24 inset-x-0 mx-auto max-w-sm px-4">
        <div className="flex items-center gap-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-2">
          <input placeholder="Ask HLife..." className="flex-1 bg-transparent outline-none text-sm px-2" />
          <button className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 border border-white/20 px-4 py-2 text-sm">Send</button>
        </div>
      </div>
    </div>
  )
}
