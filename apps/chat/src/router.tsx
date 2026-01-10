import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Layout from '@/pages/Layout'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
