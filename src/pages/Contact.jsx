import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2, "Podaj imię (min. 2 znaki)"),
    email: z.string().email("Podaj poprawny email"),
    topic: z.string().min(3, "Temat jest wymagany"),
    message: z.string().min(10, "Wiadomość min. 10 znaków"),
    rodo: z.boolean().refine(v => v === true, "Wymagana zgoda"),
});

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { rodo: false },
    });

    const onSubmit = async () => {
        setStatus("sending");
        await new Promise(r => setTimeout(r, 900));
        setStatus("sent");
        reset();
        setTimeout(() => setStatus("idle"), 2500);
    };

    return (
        <section className="page">
            <header className="page-head">
                <h1>Kontakt</h1>
                <p className="muted">Formularz z walidacją + symulacja wysyłki.</p>
            </header>

            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-grid">

                    {/* IMIĘ */}
                    <label className="field">
                        <span>Imię</span>
                        <input
                            {...register("name")}
                            aria-invalid={!!errors.name}
                        />
                        <small className="error">
                            {errors.name?.message || ""}
                        </small>
                    </label>

                    {/* EMAIL */}
                    <label className="field">
                        <span>Email</span>
                        <input
                            {...register("email")}
                            aria-invalid={!!errors.email}
                        />
                        <small className="error">
                            {errors.email?.message || ""}
                        </small>
                    </label>

                    {/* TEMAT */}
                    <label className="field span-2">
                        <span>Temat</span>
                        <input
                            {...register("topic")}
                            aria-invalid={!!errors.topic}
                        />
                        <small className="error">
                            {errors.topic?.message || ""}
                        </small>
                    </label>

                    {/* WIADOMOŚĆ */}
                    <label className="field span-2">
                        <span>Wiadomość</span>
                        <textarea
                            rows={6}
                            {...register("message")}
                            aria-invalid={!!errors.message}
                        />
                        <small className="error">
                            {errors.message?.message || ""}
                        </small>
                    </label>

                    {/* RODO */}
                    <label className="check span-2">
                        <input type="checkbox" {...register("rodo")} />
                        <span>Wyrażam zgodę na przetwarzanie danych (RODO)</span>
                    </label>
                    <small className="error span-2">
                        {errors.rodo?.message || ""}
                    </small>

                </div>

                <button
                    className="btn primary"
                    disabled={isSubmitting || status === "sending"}
                >
                    {status === "sending" ? "Wysyłanie..." : "Wyślij"}
                </button>

                <div aria-live="polite" className="status">
                    {status === "sent" && (
                        <p className="success">Wiadomość wysłana! 🌷</p>
                    )}
                </div>
            </form>
        </section>
    );
}
