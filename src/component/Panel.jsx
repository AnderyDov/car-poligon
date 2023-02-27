import { Html } from '@react-three/drei';

export function Panel() {
    return (
        <Html center>
            <div
                style={{
                    color: '#000000',
                    background: 'grey',
                    position: 'absolute',
                    width: '20vw',
                    height: '90vh',
                    top: '20px',
                    right: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'start',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    padding: '1rem',
                }}
            >
                Панель управления
            </div>
        </Html>
    );
}
