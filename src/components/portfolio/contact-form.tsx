"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const INITIAL: FormData = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
    const [form, setForm] = useState<FormData>(INITIAL);
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus("sending");

        // TODO: Connect to Formspree / Resend
        setTimeout(() => {
            setStatus("sent");
            setForm(INITIAL);
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                </div>
                <div className="space-y-1.5">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                >
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
            </div>

            <div className="space-y-1.5">
                <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea…"
                    className="w-full resize-none rounded-lg border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
            </div>

            <button
                type="submit"
                disabled={status !== "idle"}
                className={cn(
                    "group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60",
                    "shadow-[0_0_15px_rgba(var(--primary-rgb,255,255,255),0.15)] hover:shadow-[0_0_25px_rgba(var(--primary-rgb,255,255,255),0.25)]",
                )}
            >
                {status === "idle" && (
                    <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                )}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message Sent ✓"}
            </button>
        </form>
    );
}
