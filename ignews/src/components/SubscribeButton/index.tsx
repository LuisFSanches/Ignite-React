
import { useSession, signIn } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

//getServerSideProps(SSR) -->Executado no momento que a página é renderizada
//getStaticProps(SSG) -->Executado no momento que a página é renderizada
//API routes --> A partir da ação do usuário

interface SubscribeButtonProps{
    priceId: string
}

export function SubscribeButton({priceId}:SubscribeButtonProps){

    const {data:session} = useSession()

    async function handleSubscription(){
        if(!session){
            signIn('github')
            return
        }
        try{
            const response = await api.post('/subscribe')

            const {sessionId} = response.data;
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId})

        }catch(error){
            alert(error.message)
        }
        
        
    }

    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscription}>
            Subscribe now
        </button>
    )
}