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

                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Minseo Kim</h1>
                    <p className="text-xl md:text-2xl text-neutral-500 font-medium">Graphic Design</p>
                </header>

                {/* Exhibition & Projects */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 font-mono">Exhibition & Projects</h2>
                    <div className="grid gap-6">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold">2024 WOWFF 3D Head Director</h3>
                                <span className="text-neutral-400 font-mono text-sm">2025</span>
                            </div>
                            <p className="text-neutral-600 text-sm">Visual Art Director & 3D Lead</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold">Global Project by VolkswagenAG </h3>
                                <span className="text-neutral-400 font-mono text-sm">2024&2025</span>
                            </div>
                            <p className="text-neutral-600 text-sm">Main Designer & Product</p>
                        </div>
                         <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold">KARTS X HIU 2024 Exhibition </h3>
                                <span className="text-neutral-400 font-mono text-sm">2024&2025</span>
                            </div>
                            <p className="text-neutral-600 text-sm">3D&AI based graphic & Interaction</p>
                        </div>
                         <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-lg font-bold">UMC 2025</h3>
                                <span className="text-neutral-400 font-mono text-sm">2024</span>
                            </div>
                            <p className="text-neutral-600 text-sm">Main UX/UI Designer</p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 font-mono">Education</h2>
                    <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-bold">BFA in Hongik University(Seoul)</h3>
                            <span className="text-neutral-400 font-mono text-sm">2023 — present</span>
                        </div>
                        <p className="text-neutral-600 italic">Major in Visual Communication Design</p>
                    </div>
                </div>

                {/* Certificates */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 font-mono">Certificates</h2>
                    <ul className="text-neutral-600 grid gap-3 list-none">
                        <li className="flex justify-between items-center border-b border-neutral-50 pb-2">
                            <span className="font-medium">GTQ Graphic Technology — Level 1</span>
                            <span className="text-neutral-300 text-xs font-mono uppercase">Adobe</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-neutral-50 pb-2">
                            <span className="font-medium">Computer Graphics Specialist</span>
                            <span className="text-neutral-300 text-xs font-mono uppercase">HRD Service</span>
                        </li>
                    </ul>
                </div>

                {/* Awards */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 font-mono">Awards & Recognition</h2>
                    <ul className="text-neutral-600 grid gap-2 list-disc list-inside">
                        <li>WOWFF 2024 [Best Cinematography] Award</li>
                        <li>Jeyoung Solutec [Best Product Design] Award</li>
                    </ul>
                </div>

                {/* Expertise Categories */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-8 font-mono">Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {[
                            { title: '3D', skills: ['Blender', 'C4D'] },
                            { title: 'UX/UI', skills: ['Figma', 'Visual Code Studio', 'Framer'] },
                            { title: 'AI', skills: ['Midjourney', 'ComfyUI', 'Runway', 'Antigravity', 'Higgsfield' , 'Firefly'] },
                            { title: 'Adobe', skills: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'After Effects'] },
                            { title: 'Interaction', skills: ['TouchDesigner', 'Media Pipe'] },
                            { title: 'Video', skills: ['Davinci Resolve'] },
                        ].map((category) => (
                            <div key={category.title}>
                                <h3 className="text-xs font-black text-neutral-900 mb-4 tracking-widest uppercase flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                    {category.skills.map(skill => (
                                        <span key={skill} className="text-neutral-500 text-sm hover:text-neutral-900 transition-colors cursor-default">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

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
