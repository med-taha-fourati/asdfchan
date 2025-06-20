'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const LoginPage: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                setError('Invalid credentials');
                return;
            }

            const data = await res.text();
            if (data) {
                localStorage.setItem('jwt', data);
                router.push('/');
            } else {
                setError('Login failed');
            }
        } catch {
            setError('Network error');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            autoFocus
                        />
                    </label>
                </div>
                <div style={{ marginTop: 12 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {error && (
                    <div style={{ color: 'red', marginTop: 12 }}>{error}</div>
                )}
                <button type="submit" style={{ marginTop: 16 }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;