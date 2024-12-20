```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      if(isMounted) setCount(data.count);
    };
    fetchData();
    return () => { isMounted = false; };
  }, []);

  return <div>Count: {count}</div>;
}
```