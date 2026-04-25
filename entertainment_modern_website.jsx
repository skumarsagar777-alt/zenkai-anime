// Download these files for Vercel deployment:
// 1) package.json
// 2) src/App.jsx (this file content)
// 3) src/main.jsx
// 4) index.html

import React from 'react';
import { motion } from 'framer-motion';
const Card = ({children, className=''}) => <div className={className}>{children}</div>;
const CardContent = ({children, className=''}) => <div className={className}>{children}</div>;
const Button = ({children, className='', variant, ...props}) => <button {...props} className={`px-4 py-2 border rounded-2xl ${variant==='outline' ? 'border-white text-white' : 'bg-white text-black'} ${className}`}>{children}</button>;
const Play = (props) => <span {...props}>▶</span>;
const Star = (props) => <span {...props}>★</span>;
const Search = (props) => <span {...props}>⌕</span>;
const User = (props) => <span {...props}>👤</span>;
const Bell = (props) => <span {...props}>🔔</span>;
const Heart = (props) => <span {...props}>♥</span>;

export default function AnimeStreamingSite(){
 const [query,setQuery]=React.useState('');
 const anime=[
  {name:'Solo Leveling',img:'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop'},
  {name:'Attack on Titan',img:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop'},
  {name:'Demon Slayer',img:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop'},
  {name:'Jujutsu Kaisen',img:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop'},
  {name:'One Piece',img:'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1200&auto=format&fit=crop'},
  {name:'Naruto',img:'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop'},

   ];
 const filtered = anime.filter(a=>a.name.toLowerCase().includes(query.toLowerCase()));
 return (
 <div className='min-h-screen bg-black text-white'>
  <section className='px-8 py-20 bg-gradient-to-r from-purple-900 via-black to-red-900'>
   <div className='max-w-6xl mx-auto'>
   <div className='flex items-center justify-between mb-8'>
    <div className='text-2xl font-bold'>ZenKai</div>
    <div className='hidden md:flex gap-6 text-sm text-zinc-300'><span>Home</span><span>Browse</span><span>New</span><span>My List</span></div>
    <div className='flex gap-3 items-center'><div className='hidden md:flex items-center bg-zinc-900 px-3 py-2 rounded-xl'><Search className='h-4 w-4 mr-2'/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search anime' className='bg-transparent outline-none text-sm w-32'/></div><Bell className='h-5 w-5'/><User className='h-5 w-5'/></div>
   </div>
   <div className='grid md:grid-cols-2 gap-10 items-center'>
    <div>
     <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='text-5xl md:text-7xl font-bold mb-4'>ZenKai</motion.h1>
     <p className='text-zinc-300 mb-8 text-lg'>Watch subbed and dubbed anime with a premium modern experience. Trending series, simulcasts, HD streaming, and nonstop action.</p>
     <div className='flex gap-4'>
      <Button className='rounded-2xl'><Play className='mr-2 h-4 w-4'/>Watch Now</Button>
      <Button variant='outline' className='rounded-2xl text-black'><Search className='mr-2 h-4 w-4'/>Browse</Button>
     </div>
    </div>
    <div className='rounded-3xl overflow-hidden h-80 relative'><img src='https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1400&auto=format&fit=crop' className='w-full h-full object-cover'/><div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6 text-2xl font-bold'>Featured Anime Banner</div></div>
   </div>
  </div>
  </section>

  <section className='px-8 py-10 max-w-6xl mx-auto'>
   <h2 className='text-2xl font-semibold mb-6'>Continue Watching</h2>
   <div className='grid md:grid-cols-4 gap-4'>
    {[1,2,3,4].map((i)=>(<div key={i} className='h-28 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-500'>Episode {i}</div>))}
   </div>
  </section>

  <section className='px-8 py-14 max-w-6xl mx-auto'>
   <h2 className='text-3xl font-semibold mb-6'>Trending Now</h2>
   <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
    {filtered.map((item,i)=>(
      <Card key={i} className='bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden'>
       <img src={item.img} className='h-48 w-full object-cover'/>
       <CardContent className='p-4'>
        <h3 className='font-semibold mb-2'>{item.name}</h3>
        <div className='flex items-center justify-between text-sm'><div className='flex items-center text-yellow-400'><Star className='h-4 w-4 mr-1'/>Popular</div><Heart className='h-4 w-4 text-pink-400'/></div>
       </CardContent>
      </Card>
    ))}
   </div>
  </section>

  <section className='px-8 py-14 max-w-6xl mx-auto'>
   <h2 className='text-2xl font-semibold mb-6'>Now Playing</h2>
   <div className='rounded-3xl bg-zinc-900 h-72 flex items-center justify-center text-zinc-400 text-xl'>Anime Video Player</div>
  </section>
  <footer className='px-8 py-8 text-center text-zinc-500'>© 2026 ZenKai Anime Streaming</footer>
 </div>
 )
}
