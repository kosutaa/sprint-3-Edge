import React from 'react';
import Card from '../components/ui/Card';

const ProfilePage = () => {
  const user = {
    name: 'Usuário Convidado',
    email: 'convidado@passaabola.com',
  };

  return (
    <section>
      <h1 className="text-4xl font-bold text-plum-purple mb-6">
        Meu Perfil
      </h1>
      
      <Card className="max-w-md">
        <h2 className="text-2xl font-semibold text-dark-blue-text mb-4">
          {user.name}
        </h2>
        <p className="text-gray-600">
          <strong>Email:</strong> {user.email}
        </p>
      </Card>
    </section>
  );
};

export default ProfilePage;