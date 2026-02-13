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

                <section className="grid gap-12">

                    {/* Education */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6">Education</h2>
                        <div>
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold">BFA in Hongik University(Seoul)</h3>
                                <span className="text-neutral-400 font-mono text-sm">2023 — present</span>
                            </div>
                            <p className="text-neutral-600 italic">Major in Visual Communication Design</p>
                        </div>
                    </div>

                    {/* Awards */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6">Awards & Recognition</h2>
                        <ul className="text-neutral-600 grid gap-2 list-disc list-inside">
                            <li>WOWFF 2024 [Best Cinematography] Award</li>
                            <li>Jeyoung Solutec [Best Product Design] Award</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-6">Expertise</h2>
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
