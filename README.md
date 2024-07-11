# landX


## 🫱🏼‍🫲🏼 Start collaborating
1. Fork del Repositorio Original
2. Clonar tu Fork:
   - `git clone https://github.com/tu-usuario/tu-fork.git`
   - `cd tu-fork`
4. Configurar el Remoto upstream: (para actualizar los cambios del repositorio original)
   - `git remote add upstream https://github.com/original-usuario/original-repo.git`
5. Traer cambios actualizados:
   - `git pull upstream master`


### Uso
1. Hacer cambios y commits:
   - `git add .`
   - `git commit -m "Descripción de los cambios"`
2. Push a tu Fork:
   - `git push origin master`
3. Crear un Pull Request en GitHub; desde tu fork hacia el repositorio original.


## 💡 Recuerda
- Sincronizar tu Fork con el Repositorio Original: (Mantén tu fork actualizado)
  - ```git pull upstream master```
- Usamos PNPM


## 🗝️ Vercel AI SDK
1. Crea un archivo de variables de entorno con el comando `touch .env.local`
2. Dentro coloca la variable *GROQ_API_KEY*, esta variable la puedes conseguir contactando con alguno de los miembros del equipo o puedes crear la tuya desde el dashboard de open ia [aquí](https://platform.openai.com/api-keys).
