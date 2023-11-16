type Content = "destination" | "crew" | "tecnology"

    export async function fetchData<T>(content: Content,
        setData: React.Dispatch<React.SetStateAction<T>>,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setError: React.Dispatch<React.SetStateAction<Error | null>>) {

    try {
        const response = await fetch(`https://api-planets-ylxj.onrender.com/${content}`)
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados')
        }
        const data = await response.json()
        setData(data)
        console.log(data);

    } catch (error) {
        if (error instanceof Error) {
            setError(error);
        } else {
            setError(new Error('Erro desconhecido'));
        }
    } finally {
        setLoading(false)
    }
}