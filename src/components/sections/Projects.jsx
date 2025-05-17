import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">{" "}Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:horder-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition">
                            <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Scalable cloud infrastructure management with real0time monitoring and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                ">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between iterms-center">
                                <a href="https://www.armadalabs.com/success-stories/online-payments-platform" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:horder-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition">
                            <h3 className="text-xl font-bold mb-2">Online Payment System</h3>
                            <p className="text-gray-400 mb-4">
                                Stripe like platform that people can use globally for their payments with thier preferences.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "Kubernetes", "Azure", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                ">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between iterms-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:horder-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition">
                            <h3 className="text-xl font-bold mb-2">Gender Specific Recommendation Financial Advisor</h3>
                            <p className="text-gray-400 mb-4">
                                A scalable fintech platform that can help women to decide finacial decisions quickly and accurately.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                ">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between iterms-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}