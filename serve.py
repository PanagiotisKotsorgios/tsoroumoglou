from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse


class NoCacheHandler(SimpleHTTPRequestHandler):
    """Static local server that prevents stale CSS/HTML during visual QA."""

    def do_GET(self):
        route = self.path.split("?", 1)[0].rstrip("/")
        if route == "/index.html":
            self.send_response(302)
            self.send_header("Location", "/?site-ui=20261017")
            self.end_headers()
            return
        super().do_GET()

    def do_HEAD(self):
        route = self.path.split("?", 1)[0].rstrip("/")
        if route == "/index.html":
            self.send_response(302)
            self.send_header("Location", "/?site-ui=20261017")
            self.end_headers()
            return
        super().do_HEAD()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Clear-Site-Data", '"cache"')
        super().end_headers()


parser = argparse.ArgumentParser(description="Serve the Tsouroumoglou static website locally.")
parser.add_argument("--port", type=int, default=5173)
parser.add_argument("--bind", default="0.0.0.0")
args = parser.parse_args()

root = Path(__file__).resolve().parent
server = ThreadingHTTPServer((args.bind, args.port), lambda *handler_args: NoCacheHandler(*handler_args, directory=str(root)))
print(f"Serving {root} at http://localhost:{args.port}/")
server.serve_forever()
