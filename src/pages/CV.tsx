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
                    <p className="text-xl md:text-2xl text-neutral-500 font-medium">Graphic Designer & 3D Artist</p>
                </header>

                <section className="grid gap-12">
                    {/* About */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 underline decoration-2 underline-offset-8">Experience</h2>
                        <div className="grid gap-8">
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Senior Graphic Designer</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2023 — Present</span>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    Leading visual identity projects focused on 3D environments and AI-driven creative workflows.
                                    Collaborating with tech startups to bridge the gap between abstract concepts and visual language.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Creative Lead at Studio X</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2021 — 2023</span>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    Managed multi-disciplinary teams in developing immersive brand experiences.
                                    Specialized in procedural 3D modeling and dynamic visual systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 underline decoration-2 underline-offset-8">Education</h2>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">BFA in Visual Communication Design</h3>
                                <span className="text-neutral-400 font-mono text-sm">2017 — 2021</span>
                            </div>
                            <p className="text-neutral-600 italic">Major in Graphic Design & Motion Graphics</p>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 underline decoration-2 underline-offset-8">Awards & Recognition</h2>
                        <ul className="text-neutral-600 grid gap-2 list-disc list-inside">
                            <li>Adobe Design Achievement Awards — Semi-finalist</li>
                            <li>Graphica Magazine Features: New Generation Artists</li>
                            <li>A' Design Award — Iron Winner</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6 underline decoration-2 underline-offset-8">Expertise</h2>
                        <div className="flex flex-wrap gap-2">
                            {['3D Modeling', 'Generative AI', 'Art Direction', 'UI/UX Design', 'Branding', 'Motion Graphics', 'Blender', 'Stable Diffusion'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-neutral-100 rounded-full text-sm font-medium">{skill}</span>
                            ))}
                        </div>
                    </div>
                </section>

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
