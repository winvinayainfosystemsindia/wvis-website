module.exports = {
	apps: [
		{
			name: 'wvis-dev',
			script: 'venv-dev/bin/python3',
			args: '-m uvicorn app.main:app --host 127.0.0.1 --port 8000',
			cwd: '/var/www/wvis-website/backend',
			env: {
				ENV_FILE: '.env.dev',
				PYTHONPATH: '.'
			},
			interpreter: 'none',
		},
		{
			name: 'wvis-qa',
			script: 'venv-qa/bin/python3',
			args: '-m uvicorn app.main:app --host 127.0.0.1 --port 8001',
			cwd: '/var/www/wvis-website/backend',
			env: {
				ENV_FILE: '.env.qa',
				PYTHONPATH: '.'
			},
			interpreter: 'none',
		},
		{
			name: 'wvis-prod',
			script: 'venv-prod/bin/python3',
			args: '-m uvicorn app.main:app --host 127.0.0.1 --port 8002',
			cwd: '/var/www/wvis-website/backend',
			env: {
				ENV_FILE: '.env.prod',
				PYTHONPATH: '.'
			},
			interpreter: 'none',
		}
	]
};
