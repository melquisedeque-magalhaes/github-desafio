interface UserProps {
   avatar_url?: string;
   name?: string;
}

export function User({ name, avatar_url }: UserProps) {
   return (
      <div id="result">

         <img id="foto__perfil" src={avatar_url} alt={name} />
         <h3>{name}</h3>

         <button>
            <h4>Repos</h4>
         </button>

         <button>
            <h4>Starred</h4>
         </button>
      </div>
   );
}