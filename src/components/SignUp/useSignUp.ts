import { useSetCsrf } from './useSetCsrf'
import { useUserState } from '@/atoms/userAtom'
import { SignUp } from '@/types/form'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast, Zoom } from 'react-toastify';

export const useSignUp = () => {
  const { setUser } = useUserState()
  const { setCsrf } = useSetCsrf()
  const router = useRouter()
  const params = useMemo(() => new URLSearchParams(), [])
  const [cookies, setUseCookies] = useCookies(['_csrf'])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setUseCookies('_csrf', cookies._csrf)
  }, [cookies._csrf, setUseCookies])

  const signUp = useCallback(
    async (Inputs: SignUp) => {
      await setCsrf()

      params.append('email', Inputs.email)
      params.append('password', Inputs.password)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
        headers: {
          'X-CSRF-TOKEN': cookies._csrf,
        },
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: params,
      })
        .then((response) => response.json())
        .then(async (data) => {
          await toast.success('新規登録に成功しました', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
          setUser(data)
          setIsSubmitting(false)
          document.cookie = `weddingUserId=${data.userId}; path=/; max-age=2592000; SameSite=Strict; Secure`
          router.push('/timeLine')
        })
        .catch(async (error) => {
          await toast.error('新規登録に失敗しました', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
          setUser(null)
          setIsSubmitting(false)
        })
    },
    [cookies._csrf, params, router, setCsrf, setUser]
  )

  return { signUp, isSubmitting }
}
