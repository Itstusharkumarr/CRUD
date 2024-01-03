import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../componenet/Search'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nO2XPWtUQRSGH3CJGKsUCjY2KggWYhUx8aMVbfwdNvYxEosIVkZCEBQr0aRUEEyXoAlobPJRpEi5EcvAosYUeuXIO2QcZ+6Mi3tB4guXnTvzzp5nz8ycYeG/dnUd6ABzwGHKtAhUwDawATwGBgPPoPo35DP/m9iXdTRoz1ohRJV47mn8fo3nN80FhhKIKhMgN/6LDgGrgWkdOEJDAN1A/HUAlPa1yHIYXCMAqUwsAQdpCCAF8RJo0RCAg3gbTLxDgwCmfuCFN/EbcKlJANM+YFzBbfLyz15Y6BLgNV3qovaFFS1fB4DTwE3gYwBg7yMaN1/P1Q88Uvuh3v9NLUbWLnqL9UpVF7v3PDADfAB2gE1gGhjuNWwLeJA5dlNBEStOe5V4/OVwwT8Do8AxoE+ft4AvHkStFv4AwJ3lC17ws8BV3Ruf9HkFOOdBDOUgtgqCm8dpRn2jCh7zG8SY2s9yAMsFAK4Sog1XKd3vE/53wHG1bWPW6rk38USibR6nHfXt1zLEADoat/bXHMBEop777YlIBgxwJQGw5GWgnQO4UQBgHqdp9d0FnkSCf9ceuK33pzmAawUA5nEajgS1y+qUjvVlFahtwdiJqNWZAgDz+JoKAI6q6JzUNe7+kExSoIECAPP4agUQ88EPccGzldBptgbgFWkN6Zy3dTraWvNs2tmz+gGtJZfNSvpBRgAAAABJRU5ErkJggg==" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active"  to="/registration">Registration</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/read">Read</NavLink>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </div>
  )
}
