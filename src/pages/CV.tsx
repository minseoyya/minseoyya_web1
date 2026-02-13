import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CVPage() {
    return (
        <div className="min-h-screen bg-white text-neutral-900 px-6 md:px-16 py-20">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>Back to Home</span>
                </Link>

                <header className="mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div>
                            <Link to="/" className="block group">
                                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">Minseo Kim</h1>
                                <p className="text-lg md:text-xl font-medium tracking-tight">Graphic Design based in Korea</p>
                            </Link>
                        </div>
                        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest pt-2">
                            <span>CV</span>
                            <span>/</span>
                            <span>About</span>
                        </div>
                    </div>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
                    {/* Column 1: About Statement */}
                    <div className="md:col-span-5">
                        <div className="sticky top-32">
                            <p className="text-s md:text-medium font-medium leading-relaxed md:leading-snug tracking-tight text-neutral-900">
                                Hi! I'm graphic designer based in Korea specializing in 3D and AI.
                                Focused on connecting technology and concept into unified visual language,
                                she approaches each project from its core essence rather than surface aesthetics.
                                With a bold yet controlled perspective,
                                I like to visualize ideas into immersive imagery and structured visual systems.
                                My work explores the relationship between digital innovation and emotional clarity—designing not just visuals, but direction and identity.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Information Grid */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">

                        {/* Contact & Socials */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Contact</h2>
                                <div className="space-y-1 text-sm">
                                    <p>minseoyya@gmail.com</p>
                                    <p>@minseoyya_</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Education</h2>
                                <div className="space-y-1 text-sm">
                                    <p className="text-sm">Hongik University (Seoul)</p>
                                    <p className="text-neutral-500 italic">Visual Communication Design</p>
                                    <p className="text-neutral-400 font-mono">2023 — Present</p>
                                </div>
                            </div>
                        </div>

                        {/* Awards & Certificates */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Certificates</h2>
                                <ul className="space-y-1 text-sm font-mono text-neutral-500 uppercase">
                                    <li>GTQ Level 1</li>
                                    <li>CG Specialist</li>
                                </ul>
                            </div>
                        </div>
                         <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Awards</h2>
                                <ul className="space-y-2 text-sm">
                                    <li>WOWFF 2024 [Best Cinematography]</li>
                                    <li>Jeyoung Solutec [Best Product Design]</li>
                                </ul>
                         </div>

                        {/* Exhibition & Projects - Spanning columns if needed */}
                        <div className="sm:col-span-2 border-t border-neutral-100 pt-16">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">Exhibitions & Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-base font-bold mb-1">2024 WOWFF 3D Head Director</h3>
                                    <p className="text-sm text-neutral-600 mb-2">Visual Art Director & 3D Lead</p>
                                    <span className="text-xs font-mono text-neutral-400 underline decoration-neutral-200">2025</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">Global Project by VolkswagenAG</h3>
                                    <p className="text-sm text-neutral-600 mb-2">Main Designer & Product</p>
                                    <span className="text-xs font-mono text-neutral-400 underline decoration-neutral-200">2024 & 2025</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">KARTS X HIU 2024 Exhibition</h3>
                                    <p className="text-sm text-neutral-600 mb-2">3D & AI Graphic & Interaction</p>
                                    <span className="text-xs font-mono text-neutral-400 underline decoration-neutral-200">2024 & 2025</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">UMC 2025</h3>
                                    <p className="text-sm text-neutral-600 mb-2">Main UX/UI Designer</p>
                                    <span className="text-xs font-mono text-neutral-400 underline decoration-neutral-200">2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Expertise Category Grid */}
                        <div className="sm:col-span-2 border-t border-neutral-100 pt-16">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">Scope & Expertise</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
                                {[
                                    { title: '3D', skills: ['Blender', 'C4D'] },
                                    { title: 'UX/UI', skills: ['Figma', 'VS Code', 'Framer'] },
                                    { title: 'AI Automation', skills: ['Midjourney', 'ComfyUI', 'Runway', 'Firefly'] },
                                    { title: 'Adobe Ecosystem', skills: ['Ps', 'Ai', 'Id', 'Pr', 'Ae'] },
                                    { title: 'Interaction', skills: ['TouchDesigner', 'Media Pipe'] },
                                    { title: 'Video', skills: ['Davinci Resolve'] },
                                ].map((cat) => (
                                    <div key={cat.title}>
                                        <h3 className="text-[10px] font-black uppercase tracking-wider text-neutral-300 mb-3">{cat.title}</h3>
                                        <ul className="text-xs space-y-1 font-medium">
                                            {cat.skills.map(s => <li key={s}>{s}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="mt-48 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    <div>© 2025 Minseoyya. Essence and Future.</div>
                    <div className="flex gap-8">
                        <a href="mailto:hello@minseo.com" className="hover:text-black transition-colors">Email</a>
                        <a href="#" className="hover:text-black transition-colors">Instagram</a>
                        <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    </div>
                </footer>

                <footer className="mt-24 pt-8 border-t border-neutral-100 flex justify-between items-center text-sm text-neutral-400">
                    <span>© 2025 Minseo Kim</span>
                    <div className="flex gap-4">
                        <a href="mailto:hello@minseo.com" className="hover:text-black">Email</a>
                        <a href="#" className="hover:text-black">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
