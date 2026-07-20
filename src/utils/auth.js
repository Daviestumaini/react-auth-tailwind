// Simple client-side "auth" simulation using localStorage.
// No backend involved — this is for demo/UI purposes only.

const USERS_KEY = 'auth_users'
const SESSION_KEY = 'auth_session'

function getUsers() {
  const raw = localStorage.getItem(USERS_KEY)
  return raw ? JSON.parse(raw) : []
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// Returns { success, error }
export function registerUser(formData) {
  const users = getUsers()

  const exists = users.some(
    (u) => u.email === formData.email || u.username === formData.username
  )
  if (exists) {
    return { success: false, error: 'Email or username already registered.' }
  }

  const newUser = {
    id: Date.now(),
    firstName: formData.firstName,
    lastName: formData.lastName,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    dob: formData.dob,
    gender: formData.gender,
    password: formData.password, // demo only, never store plain passwords in real apps
    createdAt: new Date().toLocaleString(),
  }

  users.push(newUser)
  saveUsers(users)
  return { success: true }
}

// Returns { success, error }
export function loginUser(identifier, password) {
  const users = getUsers()
  const user = users.find(
    (u) =>
      (u.email === identifier || u.username === identifier) &&
      u.password === password
  )

  if (!user) {
    return { success: false, error: 'Invalid credentials.' }
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id }))
  return { success: true }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export function getCurrentUser() {
  const session = localStorage.getItem(SESSION_KEY)
  if (!session) return null

  const { id } = JSON.parse(session)
  const users = getUsers()
  return users.find((u) => u.id === id) || null
}

export function isAuthenticated() {
  return getCurrentUser() !== null
}

export function getAllUsers() {
  return getUsers()
}