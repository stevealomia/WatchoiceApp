const BASE_URL = process.env.REACT_APP_BASE_API_URL

export async function loginService(body) {
  try {
    const req = await fetch(BASE_URL + '/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function profileService() {
  try {
    const req = await fetch(BASE_URL + '/users/me', {
      credentials: 'include'
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function registerService(body) {
  try {
    const req = await fetch(BASE_URL + '/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body)
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function watchesService() {
  try {
    const req = await fetch(BASE_URL + '/watches', {
      credentials: 'include',
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function favoriteWatchService(watchId) {
  try {
    const req = await fetch(BASE_URL + `/watches/${watchId}/favorite`, {
      method: 'POST',
      credentials: 'include',
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function favoriteWatchesService() {
  try {
    const req = await fetch(BASE_URL + '/watches/favorites', {
      credentials: 'include',
    })

    const json = await req.json()
    return json
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}

export async function logoutService() {
  try {
    await fetch(BASE_URL + '/users/logout', {
      method: 'DELETE',
      credentials: 'include',
    })
    return true
  } catch (err) {
    console.log(err.stack)
    throw err
  }
}