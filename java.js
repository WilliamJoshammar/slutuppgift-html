body{
    background-color: green;
}        
        
        .navbar {
            background-color: #333;
            display: flex;
            justify-content: center;
            padding: 10px;
            gap: 20px;
            position: relative;
            transition: height 0.5s ease-in-out;
            border-radius: 10px;
        }
        .navbar a {
            color: #ccc;
            text-decoration: none;
            padding: 14px 20px;
            display: block;
            transition: color 0.3s ease;
        }
        .navbar a:hover {
            color: #fff;
        }
        .dropdown {
            position: relative;
        }
        .dropdown-content {
            position: absolute;
            background-color: #333;
            min-width: 160px;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
            text-align: center;
            padding: 10px 0;
            border-radius: 5px;
            box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        }
        .dropdown-content a {
            padding: 12px 16px;
            display: block;
            white-space: nowrap;
        }
        .dropdown:hover .dropdown-content {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
        }
